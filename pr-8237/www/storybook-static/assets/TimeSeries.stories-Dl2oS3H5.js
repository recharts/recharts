import{R as e}from"./iframe-C75BlFXB.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-bu4t9p5Z.js";import{R as h}from"./zIndexSlice-4GxCw66H.js";import{C as g}from"./ComposedChart-Bw6iA5fE.js";import{L as x}from"./Line-BTHOdtzg.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-PhqlfAou.js";import{T as V}from"./Tooltip-CsPa7k05.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./Label-D2Ecv790.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./throttle-BrgJpY2A.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DvLkyA4P.js";import"./RechartsWrapper-Di9_KxKG.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./Curve-BlWbOZj8.js";import"./step--aXjfd4u.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./activeStyles-DZYHYdm_.js";import"./useAnimationId-BsyXEGTp.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./useElementOffset-ryIYl6el.js";import"./uniqBy-IpgSihwf.js";import"./iteratee-BtVXkLhx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CNymXMwN.js";import"./Rectangle-LhN5JgeO.js";import"./util-Dxo8gN5i.js";import"./Sector-DFCDDdkD.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
