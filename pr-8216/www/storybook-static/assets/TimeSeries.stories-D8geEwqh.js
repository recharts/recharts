import{R as e}from"./iframe-ULtY-NVK.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BxexlvNE.js";import{R as h}from"./zIndexSlice-jBtZtiCi.js";import{C as g}from"./ComposedChart-BLU8rp3_.js";import{L as x}from"./Line-CXxZTyaf.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-ZBKsHMes.js";import{T as V}from"./Tooltip-R8qLM_P2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./Label-RNo0-Kup.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJMQca_o.js";import"./throttle-CHVCCuLD.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DyOG1uRh.js";import"./RechartsWrapper-JXy35Des.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./Curve-CN39irzx.js";import"./step-qhW1rf6_.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./activeStyles-nNAh6kPS.js";import"./useAnimationId-BnN3bcdg.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./ErrorBarContext-DkSuy-bE.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DardZkkK.js";import"./Rectangle-CgoAn4IQ.js";import"./util-Dxo8gN5i.js";import"./Sector-KxRZamhw.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
