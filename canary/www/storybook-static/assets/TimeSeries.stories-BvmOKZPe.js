import{e}from"./iframe-DrGUwCNH.js";import{X as s}from"./XAxis-DG0gA5yQ.js";import{R as y}from"./arrayEqualityCheck-B-thuthJ.js";import{C as g}from"./ComposedChart-BhneGLLj.js";import{L as x}from"./Line-CrfGTrAG.js";import{R as S}from"./RechartsHookInspector-DVkoldVn.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-ByzzBKwW.js";import{T as V}from"./Tooltip-Csvd94_F.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BAqDA5_7.js";import"./Layer-DOWBbL5h.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./Label-B7C6-KkD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBw-SdHg.js";import"./zIndexSlice-C-eL6wuf.js";import"./immer-BtgqId3I.js";import"./types-P3EO869A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./ReactUtils-C94_zE_J.js";import"./ActivePoints-jvJhuq8B.js";import"./Dot-BB3Ssy69.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./ErrorBarContext-Bia10oLS.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./useAnimationId-CM7jQqD0.js";import"./getRadiusAndStrokeWidthFromDot-Cc6LxlfS.js";import"./ActiveShapeUtils-xJQks6Bh.js";import"./isPlainObject-Bv08dW3C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DeFl-4jd.js";import"./Trapezoid-BR-nBhBU.js";import"./Sector-2SvHHXh3.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";import"./step-DKLDrfb1.js";import"./Curve-ywtP4oOQ.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";import"./useElementOffset-BHZsEqBf.js";import"./uniqBy-BKy-up6l.js";import"./iteratee-WrN9iqVE.js";import"./Cross-DkWZ6-nW.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
