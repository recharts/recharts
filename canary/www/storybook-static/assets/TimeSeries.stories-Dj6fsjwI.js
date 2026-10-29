import{R as e}from"./iframe-BWDOX6-u.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bg1rIWpH.js";import{R as h}from"./zIndexSlice-DNz64E0x.js";import{C as g}from"./ComposedChart-CBeAkuvH.js";import{L as x}from"./Line-CuDWoKpi.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B4wSjZj4.js";import{T as V}from"./Tooltip-E8YPsfxS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./Text-BC76d3cf.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./Label-C7PH8HeI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DK35yTF0.js";import"./throttle-CylvlJBG.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DEg5_gPJ.js";import"./RechartsWrapper-BRyXUEk1.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./Curve-CrU39aeO.js";import"./step-Cs1Ofcpa.js";import"./path-DyVhHtw_.js";import"./LabelList-Bpfp_vOc.js";import"./ActivePoints-CMBx6Neg.js";import"./Dot-BD2cxhmc.js";import"./activeStyles-1bnNLlnc.js";import"./useAnimationId-DnCcjn8H.js";import"./dataEntryStyles-BX1vU1kO.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./ErrorBarContext-CMdxFUFX.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getRadiusAndStrokeWidthFromDot-02xZ6iGX.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./useElementOffset-DDtS6U3Q.js";import"./uniqBy-BH4YjQyG.js";import"./iteratee-CCjAiajQ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bp6FZ5qp.js";import"./Rectangle-YmvaNl9F.js";import"./util-Dxo8gN5i.js";import"./Sector-D4IBl-dY.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
