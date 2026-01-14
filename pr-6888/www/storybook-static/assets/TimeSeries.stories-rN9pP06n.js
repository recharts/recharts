import{e}from"./iframe-C4Awkoff.js";import{X as s}from"./XAxis-BNPVvEKI.js";import{R as y}from"./arrayEqualityCheck-B4QvsFQi.js";import{C as g}from"./ComposedChart-BcZ2exHk.js";import{L as x}from"./Line-C_0XSPDY.js";import{R as S}from"./RechartsHookInspector-C8xIuzm_.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CRRN5Cb6.js";import{T as O}from"./Tooltip-CF8MZLWi.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./CartesianAxis-CA9DIeAi.js";import"./Layer-3uSdf7p6.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./Label-BgopB1Yd.js";import"./PolarUtils-CG-ELovL.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./zIndexSlice-BPscvr6m.js";import"./types-BzBfPwET.js";import"./hooks-Gb_nE6Hc.js";import"./CategoricalChart-CQLlvG-9.js";import"./RechartsWrapper-D13K1qt6.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./ReactUtils-QCPHueip.js";import"./ActivePoints-DJ6uMpir.js";import"./Dot-D_3FP8hc.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./ErrorBarContext-COm8GL2L.js";import"./GraphicalItemClipPath-DelQe7IH.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./useAnimationId-BOjGjWHD.js";import"./getRadiusAndStrokeWidthFromDot-DM4948L6.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./Trapezoid-C9Na_GGw.js";import"./Sector-Bh3LTLHk.js";import"./Symbols-D7LlaOYy.js";import"./Curve-CSLJzt9O.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";import"./useElementOffset-CmYDN7px.js";import"./iteratee-BuIypSwY.js";import"./Cross-_fdziKuB.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
