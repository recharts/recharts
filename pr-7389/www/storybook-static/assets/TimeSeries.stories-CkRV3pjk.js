import{c as e}from"./iframe-eXOzs3YY.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-25xD-jfg.js";import{g as y}from"./zIndexSlice-CuY-7AxA.js";import{C as g}from"./ComposedChart-zMtNTxE8.js";import{L as x}from"./Line-C4G4AOL0.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-CfOtqMhF.js";import{T as V}from"./Tooltip-Bzvd67Zb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DyNLp3_i.js";import"./CartesianAxis-DRLBBJED.js";import"./Layer-VPMddfpg.js";import"./resolveDefaultProps-DFOijNU4.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./Label-A2hDBNkM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NeCcTin-.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./types-ty1UrU8J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./immer-DwC3AsAE.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./axisSelectors-2h318yzI.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./Curve-CaJWe8Oa.js";import"./step-a4qbb-H-.js";import"./path-DyVhHtw_.js";import"./ReactUtils-C6uVGLKp.js";import"./ActivePoints-D8PlVKN0.js";import"./Dot-DA7Kaq93.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./ErrorBarContext-C69bYVo4.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";import"./useAnimationId-B5pCqy41.js";import"./getRadiusAndStrokeWidthFromDot-BBLB3WSC.js";import"./ActiveShapeUtils-DIEuoF9z.js";import"./useElementOffset-DDmKHRD5.js";import"./uniqBy-ZzENiDFV.js";import"./iteratee-KW00BhH9.js";import"./Cross-CuDnj-EF.js";import"./Rectangle-B8la5sgf.js";import"./Sector-CC4RvhGx.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
