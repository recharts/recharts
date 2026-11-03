import{R as e}from"./iframe-Dveh6XC4.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CRKEYqOq.js";import{R as h}from"./zIndexSlice-CHGKLvUt.js";import{C as g}from"./ComposedChart-BOsUMJ6o.js";import{L as x}from"./Line-41i7MCIm.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-XJHyjNta.js";import{T as V}from"./Tooltip-CFGvSGFT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./Label-Vwsx_sp3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./throttle-CRxbwEvt.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BNJiRWtc.js";import"./RechartsWrapper-BjJrVVo_.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./Curve-BFn8Gc1Y.js";import"./step-COK9gonL.js";import"./path-DyVhHtw_.js";import"./LabelList-C0azlQgx.js";import"./ActivePoints-B26bJhxw.js";import"./Dot-BnEEmk8R.js";import"./activeStyles-C0UNB_bG.js";import"./useAnimationId-ClkvXH7X.js";import"./dataEntryStyles-CX9qr7B-.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getRadiusAndStrokeWidthFromDot-BzBtfZmi.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./useElementOffset-Diqs6aNv.js";import"./uniqBy-r-8_JOan.js";import"./iteratee-F2t8nio4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CA-OBfX-.js";import"./Rectangle-L-kKC_mf.js";import"./util-Dxo8gN5i.js";import"./Sector-DPSFgAWf.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
