import{R as e}from"./iframe-CNzr7bRc.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BqePxvtA.js";import{R as h}from"./zIndexSlice-BXquQra7.js";import{C as g}from"./ComposedChart-CHYxJs3d.js";import{L as x}from"./Line-C5pEban5.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BaY54_t1.js";import{T as V}from"./Tooltip-BCC0qlIK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./resolveDefaultProps-eALPB1-k.js";import"./Text-DNGP5VRJ.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./Label-DK5ffKtI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./throttle-D60XWAz6.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Cj1w7XZO.js";import"./RechartsWrapper-BDCqiBvb.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./path-DyVhHtw_.js";import"./LabelList-BM4oqAMz.js";import"./ActivePoints-K0chRQ_g.js";import"./Dot-CUKZE6AE.js";import"./activeStyles-DoMnj4mo.js";import"./useAnimationId-CDC5NaEo.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./ErrorBarContext-CNXHKdeb.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./getRadiusAndStrokeWidthFromDot-COyF9q3U.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./useEffectiveDataKey-CeL4hQha.js";import"./useElementOffset-BRAQ4wcr.js";import"./uniqBy-rckpUkc6.js";import"./iteratee-C6pzj2S7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-kZkGTP7N.js";import"./Rectangle-_7pUXE0L.js";import"./util-Dxo8gN5i.js";import"./Sector-DNATorIr.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
