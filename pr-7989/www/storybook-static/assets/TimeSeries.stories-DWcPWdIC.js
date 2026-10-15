import{R as e}from"./iframe-DW88jlWE.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DR4MLdhh.js";import{R as h}from"./zIndexSlice-DVK4421h.js";import{C as g}from"./ComposedChart-CCOYdmsW.js";import{L as x}from"./Line-eHeA353O.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B9KsqEcg.js";import{T as V}from"./Tooltip-CU8_CHdD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./Text-BEy-xjYS.js";import"./pageBackground-D5Jdtqol.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./Label-woFms0xV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NojUaQJi.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./throttle-DdwERQOb.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-BvsqhHdG.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./Curve-Dh68tpzp.js";import"./step-DBxmXEXg.js";import"./path-DyVhHtw_.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./ActivePoints-uBvMOKmI.js";import"./Dot-uVIbcFi4.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getRadiusAndStrokeWidthFromDot-jzOKzrlC.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./useEffectiveDataKey-OZ4YR6rc.js";import"./useElementOffset-BhYHZyL1.js";import"./uniqBy-CqnjSlNB.js";import"./iteratee-CxMCF-q0.js";import"./Cross-BgszvaaW.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./Sector-BtU0zDu-.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
