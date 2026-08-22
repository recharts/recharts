import{R as e}from"./iframe-BbXL7Cr7.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Btj2F3fL.js";import{R as h}from"./zIndexSlice-BR49NRPU.js";import{C as g}from"./ComposedChart-CCaJGEZA.js";import{L as x}from"./Line-CIN54Xgr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CN-R3gXh.js";import{T as V}from"./Tooltip-J7PVSXVe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CEc_iNEs.js";import"./Layer-D606BzuS.js";import"./resolveDefaultProps-DIGEkxJt.js";import"./Text-C5yxXkZn.js";import"./DOMUtils-rWy1CvzQ.js";import"./isWellBehavedNumber-DUOtRF_5.js";import"./useId-Fqq5zcUf.js";import"./useBackwardsCompatibleTheme-DJFjGyq7.js";import"./Label-BH4Z3dzl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C89K7jek.js";import"./index-CvmUWFik.js";import"./index-BqU8wZ1z.js";import"./types-VwfPPVmd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsPa3zOZ.js";import"./throttle-Bn8wVsPr.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-IiQ6LAia.js";import"./index-Dax1wg5T.js";import"./index-CN5luugM.js";import"./axisSelectors-BFPpN7bG.js";import"./CartesianChart-DEFHsOHa.js";import"./chartDataContext-HJenhUyy.js";import"./CategoricalChart-D9M8vTvR.js";import"./Curve-NdHov05C.js";import"./step-DT7n-Jzc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMHffIkc.js";import"./useAnimationId-CZiH3Yfv.js";import"./ActivePoints-DJMU5OQu.js";import"./Dot-CBGeJdvC.js";import"./RegisterGraphicalItemId-Cp-8L8hF.js";import"./ErrorBarContext-C0nXUhFx.js";import"./GraphicalItemClipPath-CSpG8Jrq.js";import"./SetGraphicalItem-BiIYG94Z.js";import"./getRadiusAndStrokeWidthFromDot-BBwYGeYW.js";import"./ActiveShapeUtils-CNVIMFtT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BwHd0lb7.js";import"./uniqBy-DbN_Kppn.js";import"./iteratee-C6TYOtpK.js";import"./Cross-CEQTBLEN.js";import"./Rectangle-D-sTh8XH.js";import"./util-Dxo8gN5i.js";import"./Sector-C6xVrq9L.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
