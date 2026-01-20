import{e}from"./iframe-Bp7wnAMR.js";import{X as s}from"./XAxis-CYwkaB_4.js";import{R as y}from"./arrayEqualityCheck-DxE10Oy_.js";import{C as g}from"./ComposedChart-DcPTD6P5.js";import{L as x}from"./Line-CVqT-b_7.js";import{R as S}from"./RechartsHookInspector-DHfob8nJ.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-hHhjBbva.js";import{T as O}from"./Tooltip-DUWliZ2b.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./CartesianAxis-j6YjD7Sk.js";import"./Layer-7joqFoN-.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./Label-Tu9yek-h.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CSCYRG22.js";import"./zIndexSlice-CRBGxDjV.js";import"./types-7BwnP8OD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CNofKjzo.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./RechartsWrapper-C4djzgpQ.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./ReactUtils-DrfTY3Od.js";import"./ActivePoints-Ctmx7Brj.js";import"./Dot-CALDlJiD.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./ErrorBarContext-D_srHYiC.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./useAnimationId-goMb22IV.js";import"./getRadiusAndStrokeWidthFromDot-FCZZS-qa.js";import"./ActiveShapeUtils-B5LL2uEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ck3EAtYG.js";import"./Trapezoid-eO_srE68.js";import"./Sector-BGL47Yd8.js";import"./Symbols-B3gxOXiD.js";import"./Curve-C9HH72jI.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";import"./useElementOffset-B1-MS-fR.js";import"./iteratee-C4Py6258.js";import"./Cross-C05zcV3J.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
