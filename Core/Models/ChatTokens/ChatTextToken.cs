﻿using System;
using System.Text;

namespace Echo.Core.Models.ChatTokens
{
    public class ChatTextToken : ChatToken
    {
        public ChatTextToken(byte[] bytes) : base(bytes) { }

        public override string BuildMessage()
        {
            return Encoding.UTF8.GetString(Data);
        }
    }
}
