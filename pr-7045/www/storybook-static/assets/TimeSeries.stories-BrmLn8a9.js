import{e}from"./iframe-DUQ2rD4k.js";import{X as s}from"./XAxis-Dj-mbvwT.js";import{R as y}from"./arrayEqualityCheck-BBPGZIUg.js";import{C as g}from"./ComposedChart-BTcaBYEi.js";import{L as x}from"./Line-DqtbRix_.js";import{R as S}from"./RechartsHookInspector-EoCZS-ly.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-PQ3Jd5dr.js";import{T as V}from"./Tooltip-D8ilA7K-.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CJmVZJSG.js";import"./Layer-7WkqLLbY.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./Label-C0FJwtOT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-59Hqjxa2.js";import"./zIndexSlice-D6ARQVQn.js";import"./immer-CXKbBCwk.js";import"./types-SmO60qvE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CW_OarVn.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./ReactUtils-BJlu3yfQ.js";import"./ActivePoints-CO4Xi39k.js";import"./Dot-DZAiuKz5.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./ErrorBarContext-Clyukq3z.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./useAnimationId-yl6yHjaO.js";import"./getRadiusAndStrokeWidthFromDot-Dds1z6ov.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./step-DYxjvIwM.js";import"./Curve-CF17Mcfw.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";import"./useElementOffset-DFPgklPm.js";import"./uniqBy-CSy55f1Z.js";import"./iteratee-C2OKAmKf.js";import"./Cross-BlzDrKpO.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
