import{R as e}from"./iframe-a8fM-7Cj.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CiRF9J92.js";import{R as h}from"./zIndexSlice-B7KswQd6.js";import{C as g}from"./ComposedChart-BjiltZm-.js";import{L as x}from"./Line-CfiMME7R.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-wNdoB6Dl.js";import{T as V}from"./Tooltip-DWLIYdcR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CtttCErg.js";import"./Layer-XxWBFlRD.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./Text-Bo9ttyFU.js";import"./DOMUtils-BvC4n3H8.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./Label-KdQX6hx3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./types-DyUzdvoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./throttle-CaMuYXI0.js";import"./index-Ke9S5-gf.js";import"./index-DRs5RvY7.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DeMmS_JM.js";import"./axisSelectors-DVs_A9Pl.js";import"./index-ZucSeVLn.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./Curve-BopOTfmu.js";import"./step-BGrDxD_7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVA7Axrg.js";import"./useAnimationId-DPUxtvyW.js";import"./ActivePoints-B8Jb8oVa.js";import"./Dot-DMPbfCPa.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./ErrorBarContext-DMuZxb5G.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getRadiusAndStrokeWidthFromDot-C7Tnz6V8.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";import"./useElementOffset-BGrjDRT_.js";import"./uniqBy-KCT6LaRN.js";import"./iteratee-DuzqjsWc.js";import"./Cross-B68UPwPf.js";import"./Rectangle-C2srlOyO.js";import"./util-Dxo8gN5i.js";import"./Sector-CccBQHbB.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
