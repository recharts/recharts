import{e}from"./iframe-Dim5_luC.js";import{X as s}from"./XAxis-CajpKvi_.js";import{R as y}from"./arrayEqualityCheck-DY4kDyOd.js";import{C as g}from"./ComposedChart-DbnqK2Sk.js";import{L as x}from"./Line-DivgAv5E.js";import{R as S}from"./RechartsHookInspector-P8u42xZf.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-CiSFc718.js";import{T as O}from"./Tooltip-DC6wlv6_.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./CartesianAxis-CuZKHGcg.js";import"./Layer-DsncGJyW.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./Label-g1K_6191.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D1v8rxBH.js";import"./zIndexSlice-DWwDEXe3.js";import"./types-BxKSV5b4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DQwyA4z1.js";import"./RechartsWrapper-BTGjRieY.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./ReactUtils-B4IuMLLa.js";import"./ActivePoints-BWj_K0bx.js";import"./Dot-CrMbwoD0.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./ErrorBarContext-swBbnM0b.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./useAnimationId-BMRzQV3k.js";import"./getRadiusAndStrokeWidthFromDot-B0s95MF2.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./Symbols-BQHr33CI.js";import"./Curve-C8164FP7.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";import"./useElementOffset-DTeN2fqC.js";import"./iteratee-C63kfqEP.js";import"./Cross-C0n50i0p.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
