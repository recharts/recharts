import{R as e}from"./iframe-B-rX_Ovq.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-SdNRN-8o.js";import{R as h}from"./zIndexSlice-BsQifls5.js";import{C as g}from"./ComposedChart-BlAyCMqM.js";import{L as x}from"./Line-BuWbSkCp.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DG2A9yU0.js";import{T as V}from"./Tooltip-DetbqLdq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DdRsJrM-.js";import"./CartesianAxis-Cxy1JVbR.js";import"./Layer-BzDAHWqw.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./Label-CL0zassZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFxBNrtU.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./types-BrxUVIV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./immer-DYOeNz8_.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./axisSelectors-CfXFgmuu.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./Curve-T3BWQcql.js";import"./step-h3zMWkhs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_X3btbZ.js";import"./useAnimationId-Bc7mMz9I.js";import"./ActivePoints-CPbnnH6m.js";import"./Dot-CQVjNDgk.js";import"./RegisterGraphicalItemId-DRp7yt-Z.js";import"./ErrorBarContext-D1MAgXEd.js";import"./GraphicalItemClipPath-gUtT7Str.js";import"./SetGraphicalItem-mNTSaJYY.js";import"./getRadiusAndStrokeWidthFromDot-CJuF-Sfd.js";import"./ActiveShapeUtils-Cb8N5twM.js";import"./useElementOffset-C_sA79AG.js";import"./uniqBy-CFa47bhd.js";import"./iteratee-B4Wcwj0D.js";import"./Cross-DWFZy1fI.js";import"./Rectangle-BNA8eQFW.js";import"./util-Dxo8gN5i.js";import"./Sector-UhwsFj4Q.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
