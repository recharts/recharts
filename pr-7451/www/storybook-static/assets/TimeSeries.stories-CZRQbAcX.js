import{R as e}from"./iframe-DVB9NpZr.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CjffC60d.js";import{R as h}from"./zIndexSlice-inUr0xCU.js";import{C as g}from"./ComposedChart-oQ-te1DN.js";import{L as x}from"./Line-DLH78_Xg.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-wZkz8Wtl.js";import{T as V}from"./Tooltip-DvsPMFHN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFBBhs2u.js";import"./CartesianAxis-BFFWpUHq.js";import"./Layer-CznYhS6e.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./Label-C-9e4xzc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YpWmKYVa.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./types-CmHpCyOi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJczlu3R.js";import"./immer-cUFuezMs.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./axisSelectors-ORdVTni-.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./Curve-Ct2rphZk.js";import"./step-CVw2yAQM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DN0vzfw4.js";import"./useAnimationId-D_d0Diy_.js";import"./string-B6fdYHAA.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./ErrorBarContext-C6AudozV.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./useElementOffset-BXbw_jYn.js";import"./uniqBy-DDqwjX8c.js";import"./iteratee-DxauXe4m.js";import"./Cross-CRWYoA5L.js";import"./Rectangle-eOEMHMNE.js";import"./Sector-ByTnutuv.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
