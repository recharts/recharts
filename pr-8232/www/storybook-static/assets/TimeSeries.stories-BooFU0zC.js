import{R as e}from"./iframe-Ca1UrYHb.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-fyR759Im.js";import{R as h}from"./zIndexSlice-DkJuOKqH.js";import{C as g}from"./ComposedChart-BQRHe03d.js";import{L as x}from"./Line-DA8d46P8.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BSpvxsSq.js";import{T as V}from"./Tooltip-B8lwG9Ea.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./Label-Df_VmgSa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BJjdmelv.js";import"./throttle-CQ25M_Sr.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Dxz5Fo81.js";import"./RechartsWrapper-DpgD45ps.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./Curve-_7igEkPt.js";import"./step-BwzpgB8P.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-HIGj4PG3.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./activeStyles-gkqlHaiP.js";import"./useAnimationId-Dpl0bF--.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./ErrorBarContext-ChnkHwYk.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./useElementOffset-bheOR33N.js";import"./uniqBy-BWay3J3F.js";import"./iteratee-D2oTiGUc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-COR7fnF3.js";import"./Rectangle-CrzCB3zu.js";import"./util-Dxo8gN5i.js";import"./Sector-D52HjYRR.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
