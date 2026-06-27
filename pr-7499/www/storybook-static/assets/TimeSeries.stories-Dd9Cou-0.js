import{R as e}from"./iframe-s6xAG-TK.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ILbWypkw.js";import{R as h}from"./zIndexSlice-CtX8Pm57.js";import{C as g}from"./ComposedChart-m51DX7EH.js";import{L as x}from"./Line-CJL0J86Q.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B4pAi3sm.js";import{T as V}from"./Tooltip-DNr4Jqfj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BoCVnOHD.js";import"./CartesianAxis-Bzfqb5iI.js";import"./Layer-D5OpM5xs.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./Label-Dp2fRDxb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbooohNT.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./types-DdoD64CJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iMX2N49n.js";import"./immer-BuLmScwe.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./axisSelectors-w5mwcrs7.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./Curve-BmhK5pW4.js";import"./step-DcuFANAi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BLpXLA7r.js";import"./useAnimationId-BfD45VPw.js";import"./ActivePoints-CifW1zG8.js";import"./Dot-uO_lT4NP.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./ErrorBarContext-Df3lolWT.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getRadiusAndStrokeWidthFromDot-kUCtaSTN.js";import"./ActiveShapeUtils-BRE298QS.js";import"./useElementOffset-CP6qr1Um.js";import"./uniqBy-BFlmJl3I.js";import"./iteratee-Bbn7KLaA.js";import"./Cross-DLf2lczu.js";import"./Rectangle-BvbdU8mA.js";import"./util-Dxo8gN5i.js";import"./Sector-DIf9EEf3.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
