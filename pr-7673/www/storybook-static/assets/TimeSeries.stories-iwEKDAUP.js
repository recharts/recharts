import{R as e}from"./iframe-WAmwAwqv.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C0HQ7bAn.js";import{R as h}from"./zIndexSlice-B7760TIp.js";import{C as g}from"./ComposedChart-CXlUTja7.js";import{L as x}from"./Line-DurF_OOw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B9CJnMVD.js";import{T as V}from"./Tooltip-B9ZEFjVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BJa8Ix1s.js";import"./Layer-CduouMU4.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./Label-BI58xTcy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./types-MF287rET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./throttle-DaWJmTtS.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./axisSelectors-P4MAoEAr.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./Curve-sYCo-eDU.js";import"./step-BqQm5Gfz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dygs4a37.js";import"./useAnimationId-DhhiM2kh.js";import"./ActivePoints-CCxDSDuJ.js";import"./Dot-BMicymMQ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getRadiusAndStrokeWidthFromDot-7A-aLYCL.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DQMWT-KB.js";import"./uniqBy-D-IG-Bst.js";import"./iteratee-CJxJZXFJ.js";import"./Cross-DH3iGmT5.js";import"./Rectangle-Dn9uS56j.js";import"./util-Dxo8gN5i.js";import"./Sector--Am-WAO6.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
