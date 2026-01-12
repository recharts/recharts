import{e}from"./iframe-CzId_vMR.js";import{X as s}from"./XAxis-CekBcBSy.js";import{R as y}from"./arrayEqualityCheck-DSdyV2X5.js";import{C as g}from"./ComposedChart-CMv1ks2h.js";import{L as x}from"./Line-DpyEtb9m.js";import{R as S}from"./RechartsHookInspector-Co5fk2RP.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-OGsi9SPN.js";import{T as O}from"./Tooltip-CZcztc67.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./CartesianAxis-DwsgLCPL.js";import"./Layer-Cd1nD4kQ.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./Label-C0ElDb7Z.js";import"./PolarUtils-pvs2WqdL.js";import"./ZIndexLayer-C_SxWHYm.js";import"./zIndexSlice-BwlmGQPJ.js";import"./types-DjXw3wTJ.js";import"./hooks-C9JnWS43.js";import"./CategoricalChart-Fsg15egP.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./ReactUtils-B9bn4DTf.js";import"./ActivePoints-FI39lxZ5.js";import"./Dot-BamGkrTG.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./ErrorBarContext-DSOKUBI-.js";import"./GraphicalItemClipPath-BWo7OkkL.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./useAnimationId-DOB-FYIq.js";import"./getRadiusAndStrokeWidthFromDot-DhoyS4sY.js";import"./ActiveShapeUtils-CjNwvE6j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B-Y8RlPT.js";import"./Trapezoid-D5iOXGDe.js";import"./Sector-BzoC5hxT.js";import"./Symbols-BRKfSvcL.js";import"./Curve-D5USJD5l.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";import"./useElementOffset-DjiMAkTW.js";import"./iteratee-DjtVUf_D.js";import"./Cross-D0wqL9dG.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
