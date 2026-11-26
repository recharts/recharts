import{R as e}from"./iframe-J6essBJs.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Oxu4uJGF.js";import{R as h}from"./zIndexSlice-BsmeZsA8.js";import{C as g}from"./ComposedChart-Bs7sztQ5.js";import{L as x}from"./Line-Ct90HqVK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-mCWeQZGc.js";import{T as V}from"./Tooltip-C1-jMy0E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./Label-DrwYb9eR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoWbS56a.js";import"./throttle-rB4iKGhW.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-COh-2QwC.js";import"./RechartsWrapper-CQZiUgoa.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./getRadiusAndStrokeWidthFromDot-Jh2oIQpE.js";import"./Curve-BL_nBUj1.js";import"./step-B4vSzXfO.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BOxNMiFO.js";import"./ActivePoints-C9YqKELU.js";import"./Dot-CUXpspz7.js";import"./activeStyles-Bv4vkUPt.js";import"./useAnimationId-TXNHUPXz.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./ErrorBarContext-BsKM5vJT.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./useEffectiveDataKey-XIQJdOoE.js";import"./useElementOffset-CGfgSTTk.js";import"./uniqBy-W156VtsH.js";import"./iteratee-DWpXed5n.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DNXGbAQ8.js";import"./Rectangle-D7oaCIG9.js";import"./util-Dxo8gN5i.js";import"./Sector-ClYZ4T35.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
