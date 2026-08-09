import{R as e}from"./iframe--KdzZtf9.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BtfaW-Ms.js";import{R as h}from"./zIndexSlice-CHztvQxJ.js";import{C as g}from"./ComposedChart-hjuG2iDf.js";import{L as x}from"./Line-CLz33ZR0.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DQou-uOy.js";import{T as V}from"./Tooltip-_1wfcGQ4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-8V80jjh3.js";import"./Layer-DCgJY1vZ.js";import"./resolveDefaultProps-DclZvKxN.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./Label-Bwq_3Ge6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--b9avAgZ.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./types-DxjttXzA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./throttle-hG26ZCHv.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./axisSelectors-DJc-QTCs.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./Curve-Blx4pOcl.js";import"./step-CWWzJll9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca9tbEhj.js";import"./useAnimationId-Dz24l0hc.js";import"./ActivePoints-9Jl-GXNH.js";import"./Dot-BnDtKOPm.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./getRadiusAndStrokeWidthFromDot-Ccc-h-4F.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";import"./Cross-rTbuR9fV.js";import"./Rectangle-24EhHdQN.js";import"./util-Dxo8gN5i.js";import"./Sector-emOqlKu7.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
