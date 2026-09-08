import{R as e}from"./iframe-C4it_pSb.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D3_RnCQs.js";import{R as h}from"./zIndexSlice-Bh8QqGYC.js";import{C as g}from"./ComposedChart-wnH8pGTH.js";import{L as x}from"./Line-CuCKpMKL.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CNOoHAop.js";import{T as V}from"./Tooltip-i3axsvmf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-zFiEPAc_.js";import"./Layer-Y_kQ5bDn.js";import"./resolveDefaultProps-Bk5elTFQ.js";import"./Text-C95jy76s.js";import"./DOMUtils-CPJ15NMN.js";import"./isWellBehavedNumber-C0XEinXA.js";import"./useId-CmMKngVw.js";import"./useBackwardsCompatibleTheme-DQJyo6AF.js";import"./Label-n6TZOZVu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Np7ngrTh.js";import"./index-Djot3vWG.js";import"./index-CyjOeiI7.js";import"./types-B3II6rjl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9Dyi-a8.js";import"./throttle-BWURsltW.js";import"./index-B26DTqYo.js";import"./index-BP3VCIYx.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-WzaEVVng.js";import"./axisSelectors-iywT_uRR.js";import"./index-EJd8pUya.js";import"./CartesianChart-CHj9PLOA.js";import"./chartDataContext-BS14VVpw.js";import"./CategoricalChart-CdGO65GN.js";import"./Curve-Bl8IUEFk.js";import"./step-XVUSGLsl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BXHU6KSj.js";import"./useAnimationId-DGQm40Oa.js";import"./ActivePoints-BN6Y-cEq.js";import"./Dot-4_fuURZm.js";import"./RegisterGraphicalItemId-C6_S5Zs0.js";import"./ErrorBarContext-CcVjks2v.js";import"./GraphicalItemClipPath-DOE5ucpL.js";import"./SetGraphicalItem-Crl-vV7P.js";import"./getRadiusAndStrokeWidthFromDot-BA3wP3nC.js";import"./ActiveShapeUtils-D3E5vr02.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BkE284wq.js";import"./uniqBy-Cc1N6SgR.js";import"./iteratee-DFkmPQiY.js";import"./Cross-BuHkVBYA.js";import"./Rectangle-BBBlhEC2.js";import"./util-Dxo8gN5i.js";import"./Sector-DOEkN6ER.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
