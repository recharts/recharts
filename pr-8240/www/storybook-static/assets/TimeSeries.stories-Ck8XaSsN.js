import{R as e}from"./iframe-nQqwH7QJ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CJ63RViA.js";import{R as h}from"./zIndexSlice-36iharMl.js";import{C as g}from"./ComposedChart-DjVQQbR_.js";import{L as x}from"./Line-qqwSMB27.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CE_Y-rH6.js";import{T as V}from"./Tooltip-BjxfiNg_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DQ3vG01G.js";import"./Layer-Bx429Rld.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./Text-1TJRO8Pn.js";import"./ZIndexLayer-uBy8TOlo.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./Label--FIUnsrD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./throttle-B0HUB5U4.js";import"./types-jTE1kqYu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Dnfm47Aa.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./Curve-CGPupWIw.js";import"./step-BhHvwrte.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D2Yj78tL.js";import"./ActivePoints-BO92Iyzv.js";import"./Dot-BPCTuswq.js";import"./activeStyles-DbesfPTr.js";import"./useAnimationId-BDVyTCS1.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./ErrorBarContext-CKcJf7fb.js";import"./SetGraphicalItem-BquQie6d.js";import"./getRadiusAndStrokeWidthFromDot-rJ-p2Gf9.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./useEffectiveDataKey-C12iG63u.js";import"./useElementOffset-BMJszRZD.js";import"./uniqBy-rfJhXBOv.js";import"./iteratee-C4T-0Dkz.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CaQX_rVb.js";import"./Rectangle-adiPADn5.js";import"./util-Dxo8gN5i.js";import"./Sector-BYDhkgQE.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
