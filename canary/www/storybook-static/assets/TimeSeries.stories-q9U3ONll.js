import{R as e}from"./iframe-CvMP9Fqo.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BVBOoebg.js";import{R as h}from"./zIndexSlice-B5trHRCj.js";import{C as g}from"./ComposedChart-BEnlrqE9.js";import{L as x}from"./Line-BbvHMrnh.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-b8kDtzlH.js";import{T as V}from"./Tooltip-B7ps6QuS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./Text-B1VQrHkc.js";import"./ZIndexLayer-CYiENEwf.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./Label-BXQPTxU_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./throttle-MhOaKDgE.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-B3ymYEcm.js";import"./RechartsWrapper-CzGrl1eT.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./Curve-D_Wyck_t.js";import"./step-TJxgmP_3.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D8XHfMQr.js";import"./ActivePoints-Dzw5hEuH.js";import"./Dot-RMR8pxKN.js";import"./activeStyles-iNSBQg7J.js";import"./useAnimationId-DS6RlguF.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./ErrorBarContext-BNZINJYG.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getRadiusAndStrokeWidthFromDot-CtOVRdjN.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BdV4rx2s.js";import"./Rectangle-DCriiKhl.js";import"./util-Dxo8gN5i.js";import"./Sector-C8zA7xP5.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
