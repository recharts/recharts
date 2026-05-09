import{e}from"./iframe-LVl3b4xQ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-S2uC6fKQ.js";import{R as y}from"./arrayEqualityCheck-TRBYdTbW.js";import{C as g}from"./ComposedChart-DtWLSg2c.js";import{L as x}from"./Line-OO1-Czbq.js";import{R as S}from"./RechartsHookInspector-CoEhmUtx.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DZf6r7Db.js";import{T as V}from"./Tooltip-D-xDlIQt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B7v1DDAM.js";import"./Layer-BDK9FNAf.js";import"./resolveDefaultProps-sS_sTty7.js";import"./Text-ByeLUm9f.js";import"./DOMUtils-DEoaEH8S.js";import"./Label-Jb4Mxx6L.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcAyFnZg.js";import"./zIndexSlice-bvE0U60U.js";import"./immer-BbMxIj75.js";import"./types-C5WHI9Oq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1IOrkRp.js";import"./hooks-M6iVHT7c.js";import"./axisSelectors-DOBrNYLg.js";import"./RechartsWrapper-Bu4njem6.js";import"./index-DpK2I5Z8.js";import"./CartesianChart-B4Aoe2Gv.js";import"./chartDataContext-C_HtZ8Jd.js";import"./CategoricalChart-BY9PLUYv.js";import"./Curve-BuzdDAXz.js";import"./step-Fn6xoHVy.js";import"./AnimatedItems-u-a6HbBD.js";import"./useAnimationId-aZVu4KkL.js";import"./string-B6fdYHAA.js";import"./ActivePoints-J2-wBKLN.js";import"./Dot-CLoMxYtv.js";import"./RegisterGraphicalItemId-msSYtbNf.js";import"./ErrorBarContext-C1aiTzSR.js";import"./GraphicalItemClipPath-DJ_qeJGz.js";import"./SetGraphicalItem-C3QtaGQ_.js";import"./getRadiusAndStrokeWidthFromDot-CHyMZ3bi.js";import"./ActiveShapeUtils-BFF6hf2y.js";import"./isPlainObject-B64torjy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUhT-B0R.js";import"./Trapezoid-ZdBmwUBu.js";import"./Sector-zScvcglH.js";import"./Symbols-Fu_kPQSr.js";import"./symbol-hh9GMAPc.js";import"./index-CZHbmvmq.js";import"./ChartSizeDimensions-Bx00VSUB.js";import"./OffsetShower-DPJMHPD2.js";import"./PlotAreaShower-DoIFP8gZ.js";import"./useElementOffset-U_jB-i9n.js";import"./uniqBy-DdNKSDM3.js";import"./iteratee-Cnuc8_Ni.js";import"./Cross-Dj6JaYfd.js";const zt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Gt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Gt as __namedExportsOrder,zt as default};
