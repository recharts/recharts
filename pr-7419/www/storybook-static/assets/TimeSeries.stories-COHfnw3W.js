import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Tooltip-YHivrOZa.js";import{_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,l as g,m as _,o as v,p as y,r as b,s as x,u as S,v as C,y as w}from"./d3-scale-CwU-vVnw.js";import{n as T,t as E}from"./Line---TR8N4V.js";import{n as D,t as O}from"./XAxis-BC2eC402.js";import{n as k,t as A}from"./ComposedChart-CZOHGVI-.js";import{i as j,r as M}from"./Time-CX10VzMO.js";function N(e){return l(e)<e?R(e):C(e)<e?z(e):p(e)<e?B(e):_(e)<e?V(e):S(e)<e?f(e)<e?H(e):U(e):u(e)<e?W(e):G(e)}var P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{P=e(n()),b(),c(),y(),m(),s(),g(),w(),d(),x(),M(),k(),T(),i(),D(),a(),F={component:O},I={render:e=>P.createElement(r,{width:`100%`,height:400},P.createElement(A,{data:j,margin:{top:20,right:20,bottom:20,left:20}},P.createElement(O,{dataKey:`x`,...e,domain:[`auto`,`auto`]}),P.createElement(E,{dataKey:`y`}))),args:{data:j}},L={...I,parameters:{controls:{include:[`type`,`scale`,`domain`,`data`]}},argTypes:{scale:{options:[void 0,`auto`,`ordinal`,`time`,`point`,`linear`],control:{type:`radio`}},type:{options:[void 0,`category`,`number`],control:{type:`radio`}}}},R=v(`.%L`),z=v(`:%S`),B=v(`%I:%M`),V=v(`%I %p`),H=v(`%a %d`),U=v(`%b %d`),W=v(`%B`),G=v(`%Y`),K={...I,render:e=>{let t=e.data.map(e=>e.x).map(e=>e.valueOf()),n=h().domain([Math.min(...t),Math.max(...t)]).nice(),i={domain:n.domain().map(e=>e.valueOf()),scale:n,type:`number`,ticks:n.ticks(5).map(e=>e.valueOf()),tickFormatter:N};return P.createElement(r,{width:`100%`,height:400},P.createElement(A,{data:j,margin:{top:20,right:20,bottom:20,left:20}},P.createElement(O,{dataKey:`x`,...e,...i}),P.createElement(E,{dataKey:`y`}),P.createElement(o,null)))},parameters:{controls:{include:[`data`]}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`DefaultBehaviour`,`WithD3Scale`]})))()}J();export{L as DefaultBehaviour,K as WithD3Scale,q as __namedExportsOrder,F as default};