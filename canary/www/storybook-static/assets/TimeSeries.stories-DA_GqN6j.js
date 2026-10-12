import{R as e}from"./iframe-BobpZpVS.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BH9jyr1P.js";import{R as h}from"./zIndexSlice-B5VUc3FO.js";import{C as g}from"./ComposedChart-BGA7EeyT.js";import{L as x}from"./Line-BliFn9Dn.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-VuFeIDMA.js";import{T as V}from"./Tooltip-D_aCS2jn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./resolveDefaultProps-5KovoEsD.js";import"./Text-BN-_pQam.js";import"./pageBackground-DetAsOi9.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./Label-BmZLFZpv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./throttle-fEV8U6G7.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-Bu_v2Lbu.js";import"./RechartsWrapper-DSKVysWi.js";import"./index-RL4br-tv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./Curve-CcNLhp3P.js";import"./step-jQ6ElyLT.js";import"./path-DyVhHtw_.js";import"./activeStyles-DmXgXh0p.js";import"./useAnimationId-IPDjwgCP.js";import"./dataEntryStyles-JNlk2hjG.js";import"./ActivePoints-C8uj9bPt.js";import"./Dot--zx8-KPd.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getRadiusAndStrokeWidthFromDot-CIGb04Tt.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./useEffectiveDataKey-CwNvQLsF.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";import"./Cross-CeLxTsAz.js";import"./Rectangle-D8bi7cvO.js";import"./util-Dxo8gN5i.js";import"./Sector-BE7b76Fg.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
