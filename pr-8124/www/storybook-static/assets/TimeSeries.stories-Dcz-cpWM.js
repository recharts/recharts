import{R as e}from"./iframe-CO2wyIFg.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CTUf16qw.js";import{R as h}from"./zIndexSlice-B1dwy21o.js";import{C as g}from"./ComposedChart-BcXhG0tA.js";import{L as x}from"./Line-BQshy5fI.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CG4Qydf0.js";import{T as V}from"./Tooltip-D1nNQVkK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./Text-9LTzebQz.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./Label-DwmonuSB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BTrk53y9.js";import"./throttle-Bs5LuV_m.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-6mrCXm_L.js";import"./RechartsWrapper-BPn-EIY7.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./Curve-Bk39tyeQ.js";import"./step-DLHEgf4y.js";import"./path-DyVhHtw_.js";import"./LabelList-ZxVwNU5Y.js";import"./ActivePoints-C0WjGSw3.js";import"./Dot-1KNmnTx0.js";import"./activeStyles-C1uCXth5.js";import"./useAnimationId-80VZwTZw.js";import"./dataEntryStyles-DJf9CEZB.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./ErrorBarContext-BwMCHjXJ.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./getRadiusAndStrokeWidthFromDot-DxWBVjs4.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-Dv8qg2LV.js";import"./uniqBy-DNvTgJdx.js";import"./iteratee-0AEmZrhj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cqm6penG.js";import"./Rectangle-BQZYhZHi.js";import"./util-Dxo8gN5i.js";import"./Sector-CAlOeohk.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
