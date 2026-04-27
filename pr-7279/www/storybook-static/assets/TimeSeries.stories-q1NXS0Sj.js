import{e}from"./iframe-Db5WrE36.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BTNXWmYe.js";import{R as y}from"./arrayEqualityCheck-C3JobR2_.js";import{C as g}from"./ComposedChart-CmGmKOjn.js";import{L as x}from"./Line-CBPn8kOS.js";import{R as S}from"./RechartsHookInspector-CFI1frAU.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-FiYYf1nP.js";import{T as V}from"./Tooltip-DVnP5z8y.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D6uDjXla.js";import"./Layer-BG3cqZBo.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./Text-B5PL99FR.js";import"./DOMUtils-C6TuwyJI.js";import"./Label-CpNI3apL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xgBtkb6c.js";import"./zIndexSlice-DHcQINX8.js";import"./immer-CAzEWOIE.js";import"./types-CFSpK2OQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./ReactUtils-AT3k4juV.js";import"./ActivePoints-SBAA7IQq.js";import"./Dot-C721K0mv.js";import"./RegisterGraphicalItemId-D7MaJQJ5.js";import"./ErrorBarContext-D1SBSnUl.js";import"./GraphicalItemClipPath-DsXTVivH.js";import"./SetGraphicalItem-C-hqhW2S.js";import"./useAnimationId-DKHJcbO_.js";import"./getRadiusAndStrokeWidthFromDot-D8DWZlAx.js";import"./ActiveShapeUtils-CVJU97c4.js";import"./isPlainObject-C5kCzJV1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGyhLsa6.js";import"./Trapezoid-Dafb8niv.js";import"./Sector-Dgz1-C8v.js";import"./Symbols-dNkD4NkT.js";import"./symbol-B2ykHL9B.js";import"./step-D8uPwds-.js";import"./Curve-CpGZD15H.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";import"./useElementOffset-DWnxgCCJ.js";import"./uniqBy-7PsptUMo.js";import"./iteratee-Dug52b17.js";import"./Cross-DW2Lq9rY.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
