import{R as e}from"./iframe-CVu8zrUS.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cmp_u62X.js";import{R as h}from"./zIndexSlice-Bq6bmQlp.js";import{C as g}from"./ComposedChart-DxlxWjOw.js";import{L as x}from"./Line-CcBwkv4q.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BfJtYZLb.js";import{T as V}from"./Tooltip-8ZVz6rt9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./Label-Cx8AJG-1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./throttle-DhpuiNc1.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Sot67Aim.js";import"./RechartsWrapper-BMgc3fuA.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./Curve-DnKmeSPX.js";import"./step-B759BuMX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BbIoPGWl.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./activeStyles-BYV0uDWS.js";import"./useAnimationId-HRjjYmjj.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./ErrorBarContext-v1LyTi-B.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bguv1Xns.js";import"./Rectangle-BixLzELc.js";import"./util-Dxo8gN5i.js";import"./Sector-Cdqieute.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
