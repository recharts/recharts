import{R as e}from"./iframe-DmqRNFpA.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D3OnHsd5.js";import{R as h}from"./zIndexSlice-B1K-Cx6E.js";import{C as g}from"./ComposedChart-C16lvRll.js";import{L as x}from"./Line-gXpEv3sk.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-a0YrBx9c.js";import{T as V}from"./Tooltip-D2Z3majm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./Label-CGOHFUUI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./throttle-DniwHdPI.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CgQoXC7y.js";import"./RechartsWrapper-CTNqlU94.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-ClWs31k0.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./ErrorBarContext-BaRUKqrY.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./useElementOffset-CeDnXL_W.js";import"./uniqBy-DGhKd4sh.js";import"./iteratee-CQuB2rq_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DCqromoO.js";import"./Rectangle-D2jF24kk.js";import"./util-Dxo8gN5i.js";import"./Sector-C6utI8br.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
