import{e}from"./iframe-Dq2D9WMR.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-BEqsZJa-.js";import{g as y}from"./zIndexSlice-CMIgpwRl.js";import{C as g}from"./ComposedChart-Ctt5r4_8.js";import{L as x}from"./Line-ElG_lwe6.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-CJAlquTP.js";import{T as V}from"./Tooltip-DMgDKly6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dg89qnmN.js";import"./CartesianAxis-9djuB4O0.js";import"./Layer-CNg3jf3H.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./Label-DafpBHua.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BazpBvjE.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./types-C93vTFKm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CfboEt5t.js";import"./immer-DBox_88Y.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./axisSelectors-sK2-dJnb.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./Curve-B4KKsiQU.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CnckncOE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./useElementOffset-CBQMpBJe.js";import"./uniqBy-Bftont1e.js";import"./iteratee-4ZWKoi0K.js";import"./Cross-o4f6Faa-.js";import"./Rectangle-BslqwIXI.js";import"./Sector-DUAEy4ch.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),W=r("%b %d"),X=r("%B"),B=r("%Y");function R(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):W(t):D(t)<t?X(t):B(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:R};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
