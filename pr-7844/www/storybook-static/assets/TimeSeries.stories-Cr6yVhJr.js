import{R as e}from"./iframe-Bcl-Wsua.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BkzTF5vO.js";import{R as h}from"./zIndexSlice-CAQaUmZK.js";import{C as g}from"./ComposedChart-BCODivHJ.js";import{L as x}from"./Line-BYiC1NaN.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bz3uBv2F.js";import{T as V}from"./Tooltip-f5YOsvaZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C4G_M4Jp.js";import"./Layer-DZWwUS0u.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./Label-CKR6MZGL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-j6jNc8g-.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./types-DyxZGeRY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BjEraSyi.js";import"./throttle-ByTEOgqW.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DAZxuN02.js";import"./axisSelectors-HkZtvUb3.js";import"./index-D0zdUyje.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./Curve-nBoa-bSt.js";import"./step-D_84ehuK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4sNDn0.js";import"./useAnimationId-CLfnnxh1.js";import"./ActivePoints-DjQ1bPvM.js";import"./Dot-BL8fSCF8.js";import"./RegisterGraphicalItemId-gwGVCH_O.js";import"./ErrorBarContext-Yi3ZPeq6.js";import"./GraphicalItemClipPath-w0-QNnMD.js";import"./SetGraphicalItem-Bv_ZKENs.js";import"./getRadiusAndStrokeWidthFromDot-A7w8EsXG.js";import"./ActiveShapeUtils-BI8YD_7c.js";import"./useGraphicalItemIdentity-BOUOyfoU.js";import"./useElementOffset-BS3Hp3MX.js";import"./uniqBy-BBRqX64r.js";import"./iteratee-BOTGeGNB.js";import"./Cross-CQH5U3p4.js";import"./Rectangle-Cc97JTbq.js";import"./util-Dxo8gN5i.js";import"./Sector-Be7wcIe7.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
