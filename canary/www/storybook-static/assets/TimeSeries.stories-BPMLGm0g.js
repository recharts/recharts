import{R as e}from"./iframe-B-cvRuUs.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-y94IxigF.js";import{R as h}from"./zIndexSlice-CMjvBZBG.js";import{C as g}from"./ComposedChart-CN8RK9qn.js";import{L as x}from"./Line-Csl9Oq_s.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DR_59xyj.js";import{T as V}from"./Tooltip-BWN-i7lv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-k7ozjxp6.js";import"./Layer-BuVUUS9m.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./Text-CxPZ3A1T.js";import"./DOMUtils-3oIj9XlO.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./Label-vDwlhiVA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLKwVcRH.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./types-BMpC1VHb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./throttle-CDbcUl2N.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./index-43fZ4l-Z.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Curve-BQq91RH8.js";import"./step-D9kLagG3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dsd4czhw.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./useGraphicalItemIdentity-BfmGadKt.js";import"./useElementOffset-DRlCn3Qn.js";import"./uniqBy-BHcpSUT2.js";import"./iteratee-DJT2RpEq.js";import"./Cross-ClEG0Ca2.js";import"./Rectangle-kx2mJ5WN.js";import"./util-Dxo8gN5i.js";import"./Sector-2VsF8zh6.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
