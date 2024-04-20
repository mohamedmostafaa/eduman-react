import Link from "next/link";
import React from "react";

const SidebarTopicList = () => {
  return (
    <div className="sidebar-topic-list">
      <ul>
        <li>
          <Link href="#">Account / Profile (45)</Link>
        </li>
        <li>
          <Link href="#">Mobile and Tab (12)</Link>
        </li>
        <li>
          <Link href="#">Troubleshooting (14)</Link>
        </li>
        <li>
          <Link href="#">Admission (5)</Link>
        </li>
        <li>
          <Link href="#">Purchase Course (7)</Link>
        </li>
        <li>
          <Link href="#">Course Tracking (9)</Link>
        </li>
        <li>
          <Link href="#">Refund Method (13)</Link>
        </li>
      </ul>
      <Link href="/contact" className="contact-btn">
        Contact Us
      </Link>
    </div>
  );
};

export default SidebarTopicList;
