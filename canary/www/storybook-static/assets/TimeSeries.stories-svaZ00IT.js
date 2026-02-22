import{e}from"./iframe-daRyhr9r.js";import{X as s}from"./XAxis-CvxqYJF6.js";import{R as y}from"./arrayEqualityCheck-2Pg-cl6R.js";import{C as g}from"./ComposedChart-7exnQAUu.js";import{L as x}from"./Line-lb90ucHj.js";import{R as S}from"./RechartsHookInspector-Dokqg7We.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-CDmp_quo.js";import{T as V}from"./Tooltip-DYU4iM_x.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BAyDOgMb.js";import"./Layer-Bnvu8mRz.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./Label-C2V68gYo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8DbAkQv.js";import"./zIndexSlice-B_dP-4_H.js";import"./immer-C5a-5af_.js";import"./types-B1BFfyfQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./RechartsWrapper-C9EF5VFS.js";import"./index-CdQ0cAhw.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./ReactUtils-Dnts_VJo.js";import"./ActivePoints-B0i6PuG-.js";import"./Dot-Czq-4Zob.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./ErrorBarContext-CeBeQ7um.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./useAnimationId-DzCJLB3u.js";import"./getRadiusAndStrokeWidthFromDot-C8K1qojG.js";import"./ActiveShapeUtils-BwOb2O47.js";import"./isPlainObject-Lpl2eom0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0FBXqMT.js";import"./Trapezoid-C-VqU7dw.js";import"./Sector-g7YAEghM.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./step-Bh8CmZPH.js";import"./Curve-CNVfap9K.js";import"./index-AR7D8lqg.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";import"./useElementOffset-D66ej-tJ.js";import"./uniqBy-BiF-HFyp.js";import"./iteratee-DVpKSMyj.js";import"./Cross-CaVgcF-G.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
