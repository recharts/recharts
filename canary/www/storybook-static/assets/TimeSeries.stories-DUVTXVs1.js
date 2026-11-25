import{R as e}from"./iframe-DUAuhaDC.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DmKgW9ez.js";import{R as h}from"./zIndexSlice-CUoIUvAK.js";import{C as g}from"./ComposedChart-veB2s4XE.js";import{L as x}from"./Line-W70Z0DZz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-BzOzklff.js";import{T as V}from"./Tooltip-D9wU0lMf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./Label-BlZKxSKy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./throttle-C34y-YGF.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DKypf8DU.js";import"./RechartsWrapper-C2YARZjw.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Curve-DZ4xVtop.js";import"./step-C7gBnBWw.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-ChkH59oB.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./activeStyles-joM0AtO_.js";import"./useAnimationId-B4mDEWzj.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./ErrorBarContext-CEfM97ww.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./useElementOffset-Ce5Z9USj.js";import"./uniqBy-BJtcRwMD.js";import"./iteratee-rFCL0i6s.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CCONpWDd.js";import"./Rectangle-CDSDw5vR.js";import"./util-Dxo8gN5i.js";import"./Sector-D1NRM6xc.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
