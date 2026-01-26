import{e}from"./iframe-BtSIgQK6.js";import{X as s}from"./XAxis-Duh47LNW.js";import{R as y}from"./arrayEqualityCheck-DE2iBB4w.js";import{C as g}from"./ComposedChart-D2t4vYg_.js";import{L as x}from"./Line-DK5zDU5f.js";import{R as S}from"./RechartsHookInspector-CTyYdRny.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CGAxpLYE.js";import{T as O}from"./Tooltip-ColOtzuE.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./CartesianAxis-B7nPrlAA.js";import"./Layer-C0Jzn9sV.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./Label-CWG_XmjD.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-GjRfBXiF.js";import"./zIndexSlice-BxfsWazG.js";import"./types-CCc-_PPP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-3j04d5vi.js";import"./CategoricalChart-CKsWezcf.js";import"./RechartsWrapper-y4jP1OLx.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./ReactUtils-CkWZzFSr.js";import"./ActivePoints-DmeZ1ufV.js";import"./Dot-B1qpgIfY.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./ErrorBarContext-COBKZW6S.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./useAnimationId-B8iQHdnT.js";import"./getRadiusAndStrokeWidthFromDot-BqZRZ_5P.js";import"./ActiveShapeUtils-8qEwWVM1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BdN80mGv.js";import"./Trapezoid-CtEgnRI2.js";import"./Sector-BRe1-FfM.js";import"./Symbols-DbTQ7A03.js";import"./Curve-CPkDoGPV.js";import"./index-D1fEpgHD.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";import"./useElementOffset-CWby9Xwm.js";import"./iteratee-ktsmYB4p.js";import"./Cross-B_I98bz3.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
