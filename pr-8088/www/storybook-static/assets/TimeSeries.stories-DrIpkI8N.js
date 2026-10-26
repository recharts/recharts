import{R as e}from"./iframe-DcaMyu57.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CpQfhxVu.js";import{R as h}from"./zIndexSlice-D63TC5wE.js";import{C as g}from"./ComposedChart-Ccm1rBcn.js";import{L as x}from"./Line-qfkHf2wW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CtXzbLe9.js";import{T as V}from"./Tooltip-49fj7LmN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./Text-BDVAjJGp.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./Label-CNqQQqDH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8YroQFB.js";import"./throttle-DTKuFpeU.js";import"./dataEntryStyles-Dvqex9ju.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DeMGjxl4.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./Curve-zPXLC5y1.js";import"./step-DwnhkCIy.js";import"./path-DyVhHtw_.js";import"./activeStyles-DWP2-Wsz.js";import"./useAnimationId-CY8QIDMT.js";import"./ActivePoints-ByVehSZn.js";import"./Dot-DNgNZq3J.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getRadiusAndStrokeWidthFromDot-brVJexwW.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BtF40hvQ.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./Sector-jAYUYlJM.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
