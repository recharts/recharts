import{R as e}from"./iframe-DpFoyu2v.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B0PuBmnr.js";import{R as h}from"./zIndexSlice-BR5-by35.js";import{C as g}from"./ComposedChart-DYhdzMG2.js";import{L as x}from"./Line-DsODaGkU.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DFMCrQku.js";import{T as V}from"./Tooltip-ByKC-vUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./Label-RSQOEDTQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./throttle-CbL9mvVE.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DsRIuzGY.js";import"./RechartsWrapper-BNB2siqp.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./Curve-CrBw6Qm3.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./LabelList-BcqFX_Cs.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./activeStyles-Dlv-kHFt.js";import"./useAnimationId-DcTYtpTG.js";import"./dataEntryStyles-BSD8zeo1.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BMOocMKo.js";import"./Rectangle-D1RSMQ2o.js";import"./util-Dxo8gN5i.js";import"./Sector-DyuVM7Tk.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
