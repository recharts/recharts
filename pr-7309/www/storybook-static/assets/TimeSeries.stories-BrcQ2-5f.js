import{e}from"./iframe-BWXS80lS.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-_91HGxIi.js";import{R as y}from"./arrayEqualityCheck-C3u4XnRQ.js";import{C as g}from"./ComposedChart-xvGA_wfn.js";import{L as x}from"./Line-D2_PZAg_.js";import{R as S}from"./RechartsHookInspector-BRyQ5hs2.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-zfNl6p6O.js";import{T as V}from"./Tooltip-CT--u3IA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B8jMapSP.js";import"./Layer-CiG7NGHu.js";import"./resolveDefaultProps-BuIDsZJ5.js";import"./Text-BQ1FWDem.js";import"./DOMUtils-DC1JBHtR.js";import"./Label-CJTshKiS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fCru-3Nt.js";import"./zIndexSlice-d9o2MkaU.js";import"./immer-q9ikkIh9.js";import"./types-B2Bimmd7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DqJmQzpf.js";import"./hooks-RRXvqXA6.js";import"./axisSelectors-CxvM0uDn.js";import"./RechartsWrapper-Ge4Ob0hk.js";import"./index-BHFN0jNx.js";import"./CartesianChart-34jBpyPx.js";import"./chartDataContext-BhTPdOXh.js";import"./CategoricalChart-DEIvmDa9.js";import"./ReactUtils-C5S3KkGf.js";import"./ActivePoints-BQI1dN0-.js";import"./Dot-BwCqCngA.js";import"./RegisterGraphicalItemId-CEYbgURY.js";import"./ErrorBarContext-BMlXzYwR.js";import"./GraphicalItemClipPath-DmuLKEXw.js";import"./SetGraphicalItem-Bs8XX-Ij.js";import"./useAnimationId-8mmnumbx.js";import"./getRadiusAndStrokeWidthFromDot-CUi_ls90.js";import"./ActiveShapeUtils-BT90lXsu.js";import"./isPlainObject-Cy0CV0qj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4VIJx5D.js";import"./Trapezoid-DpceZUPJ.js";import"./Sector-CLFD9_Zr.js";import"./Symbols-BWe2eBvB.js";import"./symbol-BsfZTgYj.js";import"./step-CtJYHt9n.js";import"./Curve-DycDyh58.js";import"./index-DflyfLFf.js";import"./ChartSizeDimensions-hQ4c9Mxw.js";import"./OffsetShower-uoVY1zNd.js";import"./PlotAreaShower-BwJGGkjL.js";import"./useElementOffset-9snkxXEv.js";import"./uniqBy-C1Fr29UV.js";import"./iteratee-LfF2GEsl.js";import"./Cross-AeOo41XI.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
