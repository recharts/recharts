import{R as e}from"./iframe-B5lEY8zD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DFQPNyZu.js";import{R as h}from"./zIndexSlice-BgROAb6p.js";import{C as g}from"./ComposedChart-Bet3bhVW.js";import{L as x}from"./Line-UBoMUVJK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Be2MBhun.js";import{T as V}from"./Tooltip-Bywq2Krs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./Label-BcoGvPAa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./throttle-B3jfQssg.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BghrQiEU.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./ErrorBarContext-BW17ZVEc.js";import"./SetGraphicalItem-BlbgEltH.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CuapKUiT.js";import"./Rectangle-DrSOMoM_.js";import"./util-Dxo8gN5i.js";import"./Sector-pZI3lBm7.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
