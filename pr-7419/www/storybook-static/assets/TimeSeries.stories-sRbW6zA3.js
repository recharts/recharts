import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Jt as i,Kt as a,Qt as o,Rt as s,Vn as c,X as l,Yt as u,Zt as d,cn as f,en as p,fn as m,in as h,nn as g,on as _,t as v,u as y,un as b}from"./iframe-BqVvK_R4.js";import{p as x,t as S}from"./data-J2vpPkF6.js";function C(e){return m(e)<e?O(e):b(e)<e?k(e):f(e)<e?A(e):_(e)<e?j(e):g(e)<e?h(e)<e?M(e):N(e):p(e)<e?P(e):F(e)}var w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{w=t(n()),a(),u(),o(),S(),v(),T={component:r},E={render:e=>w.createElement(c,{width:`100%`,height:400},w.createElement(y,{data:x,margin:{top:20,right:20,bottom:20,left:20}},w.createElement(r,{dataKey:`x`,...e,domain:[`auto`,`auto`]}),w.createElement(l,{dataKey:`y`}))),args:{data:x}},D={...E,parameters:{controls:{include:[`type`,`scale`,`domain`,`data`]}},argTypes:{scale:{options:[void 0,`auto`,`ordinal`,`time`,`point`,`linear`],control:{type:`radio`}},type:{options:[void 0,`category`,`number`],control:{type:`radio`}}}},O=d(`.%L`),k=d(`:%S`),A=d(`%I:%M`),j=d(`%I %p`),M=d(`%a %d`),N=d(`%b %d`),P=d(`%B`),F=d(`%Y`),I={...E,render:e=>{let t=e.data.map(e=>e.x).map(e=>e.valueOf()),n=i().domain([Math.min(...t),Math.max(...t)]).nice(),a={domain:n.domain().map(e=>e.valueOf()),scale:n,type:`number`,ticks:n.ticks(5).map(e=>e.valueOf()),tickFormatter:C};return w.createElement(c,{width:`100%`,height:400},w.createElement(y,{data:x,margin:{top:20,right:20,bottom:20,left:20}},w.createElement(r,{dataKey:`x`,...e,...a}),w.createElement(l,{dataKey:`y`}),w.createElement(s,null)))},parameters:{controls:{include:[`data`]}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...I.parameters?.docs?.source}}},L=[`DefaultBehaviour`,`WithD3Scale`]}))();export{D as DefaultBehaviour,I as WithD3Scale,L as __namedExportsOrder,T as default};