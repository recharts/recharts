import{R as e}from"./iframe-yFUZOAXo.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-VuWV4oHL.js";import{R as h}from"./zIndexSlice-gBXHaIY6.js";import{C as g}from"./ComposedChart-CLIGRHzc.js";import{L as x}from"./Line-DBwfQOxZ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-BRWdQdSe.js";import{T as V}from"./Tooltip-kufh7Sgn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./Label-C38PHRGq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-EZDSIF5u.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./getRadiusAndStrokeWidthFromDot-a_asEMsX.js";import"./Curve-YzirgrH8.js";import"./step-BqjoQNYS.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-D7kCW6zO.js";import"./ActivePoints-EuxxAYs7.js";import"./Dot-BxahtCeT.js";import"./activeStyles-DarVPLRL.js";import"./useAnimationId-JmfqkQro.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./ErrorBarContext-Bka5ymRE.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./isArguments-yB-y1yaH.js";import"./Cross-qaIs1wuS.js";import"./Rectangle-Btd8NkER.js";import"./util-Dxo8gN5i.js";import"./Sector-Bh9Zkm4g.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
