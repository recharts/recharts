import{R as e}from"./iframe-Brw_3xg7.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DXhKRI9c.js";import{R as h}from"./zIndexSlice-2iAxrZkm.js";import{C as g}from"./ComposedChart-DXqSl_Jh.js";import{L as x}from"./Line-BR2md8Jx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DDiKCNKi.js";import{T as V}from"./Tooltip-vXTAbAqr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DBWQUVsj.js";import"./Layer-U4JZqCxa.js";import"./resolveDefaultProps-6Y628-3q.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./Label-CpCnMIaY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DvhvnUDg.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./types-BTkYx2NR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./throttle-ConCS3s7.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CMScH4Y-.js";import"./axisSelectors-BgtJq2Kp.js";import"./index-DZwFur8w.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./Curve-C9eVciME.js";import"./step-Bi6RETvz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./useAnimationId-LBf_tWSw.js";import"./ActivePoints-CFOMS5xz.js";import"./Dot-CwLVs_ZX.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getRadiusAndStrokeWidthFromDot-DFfjCAar.js";import"./ActiveShapeUtils-DolYUreE.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";import"./useElementOffset-C0IEKM2v.js";import"./uniqBy-DcxgoEQg.js";import"./iteratee-DhCw4nN3.js";import"./Cross-CO1parlB.js";import"./Rectangle-CNj8eYAZ.js";import"./util-Dxo8gN5i.js";import"./Sector-CvCebKc6.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
