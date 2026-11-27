import{R as e}from"./iframe-Dt7VmJVd.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-6DHVILmw.js";import{R as h}from"./zIndexSlice-CsJRlQGe.js";import{C as g}from"./ComposedChart-BEVdjL9z.js";import{L as x}from"./Line-NbDON0kK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-DKSFl2hd.js";import{T as V}from"./Tooltip-BVGdfQP8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./Label-DBOYMKjR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./throttle-DKLEp5Cv.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DsQjGGXt.js";import"./RechartsWrapper-DmetyJsw.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BTAsZYzb.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./ErrorBarContext-BfQEnsTO.js";import"./SetGraphicalItem-meI4aCtS.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./useElementOffset-D-hWuImz.js";import"./uniqBy-DBz81KvG.js";import"./iteratee-Csv0o0lQ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUJsKjqx.js";import"./Rectangle-Dhd8BSnf.js";import"./util-Dxo8gN5i.js";import"./Sector-Dq9-kf9w.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
