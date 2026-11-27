import{R as e}from"./iframe-DP6zAp54.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-wrPg27KZ.js";import{R as h}from"./zIndexSlice-CdFbAgG_.js";import{C as g}from"./ComposedChart-Djbyfnt-.js";import{L as x}from"./Line-CatZrMVF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-Ct01c8MP.js";import{T as V}from"./Tooltip-aHvmiEwK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./Label-DIQKMqhX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrRxC45o.js";import"./throttle-D7lh8v3-.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Rm4q15PI.js";import"./RechartsWrapper-DOH9cWj9.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DojbuA9r.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./useAnimationId-EekDlSpG.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./ErrorBarContext-CmnSonHd.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B1K9Yltn.js";import"./Rectangle-Cg7APWAF.js";import"./util-Dxo8gN5i.js";import"./Sector-0McMm1EY.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
