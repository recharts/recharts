import{e}from"./iframe-DCqI0XZE.js";import{X as s}from"./XAxis-v6adQsXq.js";import{R as y}from"./arrayEqualityCheck-HYppUqbL.js";import{C as g}from"./ComposedChart-BQWkPeDZ.js";import{L as x}from"./Line-BIfiJ6dH.js";import{R as S}from"./RechartsHookInspector-fFyRgJJZ.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-fdj65aw8.js";import{T as O}from"./Tooltip-Cw_iCuSj.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeYA34uT.js";import"./CartesianAxis-fqcCbsgg.js";import"./Layer-BuGX0g6x.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./Label-4-POpI1D.js";import"./PolarUtils-CVPwvSfi.js";import"./ZIndexLayer-C1uRVibY.js";import"./zIndexSlice-DaD55gZL.js";import"./types-DHuf88Dj.js";import"./hooks-D1LIxGLf.js";import"./CategoricalChart-3Iob9H8U.js";import"./RechartsWrapper-CqZMRsqw.js";import"./CartesianChart-DjU-EYVa.js";import"./chartDataContext-T8I8ugzh.js";import"./ReactUtils-B_rBW96b.js";import"./ActivePoints-DE-hR4pC.js";import"./Dot-Bi8GIran.js";import"./RegisterGraphicalItemId-D-lwaZ_v.js";import"./ErrorBarContext-Rv6Vd2e5.js";import"./GraphicalItemClipPath-BG8ZwsZs.js";import"./SetGraphicalItem-CD6yUE_R.js";import"./useAnimationId-PgeDRpeU.js";import"./getRadiusAndStrokeWidthFromDot-BoS6fH9m.js";import"./ActiveShapeUtils-BTx5WARf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpPAOcrn.js";import"./Trapezoid-BbcOya6W.js";import"./Sector-Cy_aXDIz.js";import"./Symbols-Cxsfovx2.js";import"./Curve-Y6fdEOBg.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";import"./useElementOffset-BRgYYVQV.js";import"./iteratee-BE3nwIgK.js";import"./Cross-Cz5FkvJu.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
