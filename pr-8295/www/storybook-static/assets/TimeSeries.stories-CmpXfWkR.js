import{R as e}from"./iframe-kLrggBpZ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B-2vEHb0.js";import{R as h}from"./zIndexSlice-CKCGde2F.js";import{C as g}from"./ComposedChart-DaK4Bp3q.js";import{L as x}from"./Line-D-PTgy1R.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DE-4LfFJ.js";import{T as V}from"./Tooltip-DMq8uqJi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./Label-CpspZ4dp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./throttle-BkTfx27C.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D6wM5g8f.js";import"./RechartsWrapper-DVOP9mMm.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Curve-CYSM8Ubv.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DxslDEhK.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./activeStyles-BevLUsk4.js";import"./useAnimationId-CEVcGH0v.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./ErrorBarContext-MaEtcn-S.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./useElementOffset-BhEl9_49.js";import"./uniqBy-B-ByEpXp.js";import"./iteratee-B7qBUA2a.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DOurOaBQ.js";import"./Rectangle-f81kex-M.js";import"./util-Dxo8gN5i.js";import"./Sector-CSRJPYTa.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
