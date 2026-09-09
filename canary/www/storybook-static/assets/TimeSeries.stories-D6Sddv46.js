import{R as e}from"./iframe-BzcDVKKs.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DmxgzYYf.js";import{R as h}from"./zIndexSlice-BTTYVccT.js";import{C as g}from"./ComposedChart-DGju_FYc.js";import{L as x}from"./Line-C1gWHpuW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C4pPFzlU.js";import{T as V}from"./Tooltip-B1Brq9iS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-HfL3rF1Y.js";import"./Layer-B4cUMoCn.js";import"./resolveDefaultProps-BtypfTmg.js";import"./Text-24J6FH-o.js";import"./DOMUtils-Bp1Ea9M_.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./Label-CtBQk67s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DXdU7RWt.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./types-Cgo5Tovd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./throttle-DDPbgHA_.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CGczEQWO.js";import"./axisSelectors-IdMVp5Ng.js";import"./index-DrsmB6aN.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./Curve-D-bcAvVw.js";import"./step-DnJg-qaF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tb47PotV.js";import"./useAnimationId-B_k41OIp.js";import"./ActivePoints-hCgPRLnM.js";import"./Dot-aHiofzDa.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./ErrorBarContext-C3FB8ozV.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getRadiusAndStrokeWidthFromDot-DgBFRHKH.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-VjV8E2aW.js";import"./uniqBy-eOMq6B75.js";import"./iteratee-DrjruNpI.js";import"./Cross-B6ejWItR.js";import"./Rectangle-DA-7Dq-R.js";import"./util-Dxo8gN5i.js";import"./Sector-DmQmgrZA.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
