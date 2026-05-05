import{e}from"./iframe-BR42SwHx.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Tjb-FFWw.js";import{R as y}from"./arrayEqualityCheck-BTlu6_X5.js";import{C as g}from"./ComposedChart-dNCERGfx.js";import{L as x}from"./Line-CDs3wcp9.js";import{R as S}from"./RechartsHookInspector-BoeADalq.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-UZASi0oQ.js";import{T as V}from"./Tooltip-BTvrqCSy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bu_sq35Y.js";import"./Layer-DvQoXU13.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./Label-DVExpSeB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8Duyh3JO.js";import"./zIndexSlice-DLL8OYNe.js";import"./immer-CBsUjXpI.js";import"./types-CNxj5JXu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C8E2aIah.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./ReactUtils-CgBYlHJF.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./ErrorBarContext-BHkWs-ti.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./useAnimationId-B6YKrKnq.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./ActiveShapeUtils-Bs6a3E44.js";import"./isPlainObject-CgqdHIW2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Di_iOTI6.js";import"./Trapezoid-BEZ2jh2g.js";import"./Sector-CuH6E9-r.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";import"./step-CO8PYd_W.js";import"./Curve-MgYQVsjt.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";import"./Cross-LzqoNpy2.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
