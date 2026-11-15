import{R as e}from"./iframe-CywB74O-.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BnyIc3dE.js";import{R as h}from"./zIndexSlice-CuZ12U6x.js";import{C as g}from"./ComposedChart-DnMaCTiC.js";import{L as x}from"./Line-CuUolajC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B6sMKT8T.js";import{T as V}from"./Tooltip-TyNHZ99B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BkY9x357.js";import"./Layer-BeaWmaSV.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./Text-D8_iVJPC.js";import"./ZIndexLayer-CHuGvNnR.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./Label-DQEyyaka.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CHx-smd7.js";import"./throttle-Cdx6aCwi.js";import"./types-DUxXs5Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BlSjRH8p.js";import"./RechartsWrapper-DNXYBwim.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./Curve-BR2e6dhB.js";import"./step-DvAd1GMT.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BnKQuw5H.js";import"./ActivePoints-CULdSp3M.js";import"./Dot-CZ266pMm.js";import"./activeStyles-yKq-qtiq.js";import"./useAnimationId-DiaU742M.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./ErrorBarContext-BRsViJuO.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getRadiusAndStrokeWidthFromDot-Dx2mkX1A.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./useElementOffset-DGFvSoKL.js";import"./uniqBy-lBBs8O3F.js";import"./iteratee-Dqbbdx6l.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BarD34_9.js";import"./Rectangle-qMfUeqmL.js";import"./util-Dxo8gN5i.js";import"./Sector-C2YaCYBx.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
